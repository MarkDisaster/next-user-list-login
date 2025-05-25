"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  addUserSchema,
  AddUserFormType,
} from "@/components/AddUserForm/schema";
import { useUsers } from "@/features/hooks/useUsers";
import { useForm } from "react-hook-form";
import { Form } from "@/components/UI/Form/Form";
import { InputText } from "@/components/UI/Form/InputText";
import { Button } from "@/components/UI/Button";
import { useModal } from "../UI/Modal/context";

export const AddUserForm = () => {
  const formMethods = useForm<AddUserFormType>({
    resolver: zodResolver(addUserSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    },
  });

  const { addUser, users } = useUsers();
  const { closeModal } = useModal();

  const onSubmit = (data: AddUserFormType) => {
    addUser({
      ...data,
      id: users[users.length - 1].id++,
    });
    closeModal();
  };

  return (
    <Form {...formMethods} onSubmit={onSubmit} className="space-y-4">
      <div className="flex gap-4">
        <InputText
          name="name"
          placeholder="Jméno"
          control={formMethods.control}
        />
        <InputText
          name="username"
          placeholder="Přezdívka (username)"
          control={formMethods.control}
        />
      </div>

      <div className="flex gap-4">
        <InputText
          name="email"
          placeholder="E-mail"
          control={formMethods.control}
        />
        <InputText
          id="phone"
          name="phone"
          placeholder="Telefonní číslo"
          control={formMethods.control}
        />
      </div>

      <InputText
        name="website"
        placeholder="Web"
        control={formMethods.control}
      />

      <div className="flex gap-4">
        <InputText
          name="address.street"
          placeholder="Ulice"
          control={formMethods.control}
        />
        <InputText
          name="address.suite"
          placeholder="Suite"
          control={formMethods.control}
        />
      </div>

      <div className="flex gap-4">
        <InputText
          name="address.city"
          placeholder="Město"
          control={formMethods.control}
        />
        <InputText
          name="address.zipcode"
          placeholder="PSČ"
          control={formMethods.control}
        />
      </div>

      <div className="flex gap-4">
        <InputText
          name="address.geo.lat"
          placeholder="Latitude"
          control={formMethods.control}
        />
        <InputText
          name="address.geo.lng"
          placeholder="Longitude"
          control={formMethods.control}
        />
      </div>

      <InputText
        name="company.name"
        placeholder="Company Name"
        control={formMethods.control}
      />
      <InputText
        name="company.catchPhrase"
        placeholder="Catch Phrase"
        control={formMethods.control}
      />
      <InputText
        name="company.bs"
        placeholder="BS"
        control={formMethods.control}
      />

      <Button type="submit">Vytvořit uživatele</Button>
    </Form>
  );
};
