"use client";

import { useUsers } from "@/features/hooks/useUsers";
import { AddUserForm } from "@/features/components/AddUserForm";
import { Button } from "@/features/components/UI/Button";
import { useModal } from "@/features/components/UI/Modal/context";

export const UserList = () => {
  const { users, page, totalPages, setPage } = useUsers();
  const { openModal, setTitle, setContent } = useModal();

  const handleOpenModal = () => {
    setTitle("Vytvoření uživatele");
    setContent(<AddUserForm />);
    openModal();
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="w-full max-w-6xl flex flex-col gap-4 mt-4 p-4">
      <h1 className="text-xl font-bold">User List</h1>
      <div>
        <Button onClick={handleOpenModal}>Vytvořit uživatele</Button>
      </div>
      <div className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left w-[5%]">ID</th>
              <th className="p-2 text-left w-[15%]">Jméno</th>
              <th className="p-2 text-left w-[15%]">Přezdívka</th>
              <th className="p-2 text-left w-[30%]">E-mail</th>
              <th className="p-2 text-left w-[20%]">Telefonní číslo</th>
              <th className="p-2 text-left w-[15%]">Web</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 border border-b-gray-300 border-x-0 border-t-0 last:border-b-0"
              >
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.username}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.phone}</td>
                <td className="p-2">{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-4">
        <Button onClick={handlePrev} disabled={page === 1}>
          Předchozí
        </Button>

        <span>
          Stránka {page} z {totalPages}
        </span>

        <Button onClick={handleNext} disabled={page === totalPages}>
          Další
        </Button>
      </div>
    </div>
  );
};
