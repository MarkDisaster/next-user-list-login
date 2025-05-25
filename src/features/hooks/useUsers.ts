import { useSearchParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUsers } from '@/features/api/endpoints/users/userApi';
import { usersQueryKeys } from '@/features/api/endpoints/users/userQueryKeys';
import { useMemo, useState } from 'react';
import { USERS_PER_PAGE } from '@/features/utils/paginate/constants';
import { paginate } from '@/features/utils/paginate';
import { User } from '@/features/api/endpoints/users/types';

export const useUsers = () => {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const [page, setPage] = useState(pageParam ? Number(pageParam) : 1);

  const queryClient = useQueryClient();
    
  const usersQuery = useQuery({
    queryKey: usersQueryKeys.users,
    queryFn: getUsers,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const paginatedUserList = useMemo(() => {
    if (!usersQuery.data) return [];
    return paginate(usersQuery.data.slice().reverse(), page, USERS_PER_PAGE);
  }, [usersQuery.data, page]);

  const totalPages = useMemo(() => {
    return usersQuery.data ? Math.ceil(usersQuery.data.length / USERS_PER_PAGE) : 1;
  }, [usersQuery.data]);

    const addUser = (newUser: User) => {
    queryClient.setQueryData(usersQueryKeys.users, (oldData: User[]) => {
      if (!oldData) return [newUser];
      return [...oldData, newUser];
    });
  };

  return {
    users: paginatedUserList,
    page,
    totalPages,
    setPage,
    addUser,
    ...usersQuery,
  };
};
