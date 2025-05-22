"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./page.module.css";

const schema = yup.object({
  firstName: yup
    .string()
    .required("სავალდებულოა")
    .matches(/^[A-Za-z]+$/, "მხოლოდ ასოები")
    .min(4, "მინ.4")
    .max(20, "მაქს.20"),
  lastName: yup
    .string()
    .required("სავალდებულოა")
    .matches(/^[A-Za-z]+$/, "მხოლოდ ასოები")
    .min(4, "მინ.4")
    .max(20, "მაქს.20"),
  age: yup
    .number()
    .typeError("უნდა იყოს მხოლოდ ციფრები")
    .required("სავალდებულოა")
    .min(13, "მინ.13")
    .max(120, "მაქს.120"),
  email: yup.string().required("სავალდებულოა").email("არასწორი ფორმატი"),
  password: yup
    .string()
    .required("სავალდებულოა")
    .min(6, "მინ.6")
    .max(12, "მაქს.12")
    .matches(/[A-Z]/, "საჭიროა, მინიმუმ ერთი მაღალი რეგისტრი")
    .matches(/[a-z]/, "საჭიროა, მინიმუმ ერთი დაბალი რეგისტრი")
    .matches(/\d/, "1 ციფრი"),
  phone: yup
    .string()
    .required("სავალდებულოა")
    .matches(/^\d+$/, "მხოლოდ ციფრები")
    .min(10, "მინ.10")
    .max(100, "მაქს.100"),
});

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
      alert("რეგისტრაცია წარმატებით დასრულდა");
    } catch {
      alert("ვერ მოხდა რეგისტრაცია");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.field}>
          <label>
            სახელი
            <input {...register("firstName")} />
          </label>
          {errors.firstName && (
            <div className={styles.error}>{errors.firstName.message}</div>
          )}
        </div>

        <div className={styles.field}>
          <label>
            გვარი
            <input {...register("lastName")} />
          </label>
          {errors.lastName && (
            <div className={styles.error}>{errors.lastName.message}</div>
          )}
        </div>

        <div className={styles.field}>
          <label>
            ასაკი
            <input type="number" {...register("age")} />
          </label>
          {errors.age && (
            <div className={styles.error}>{errors.age.message}</div>
          )}
        </div>

        <div className={styles.field}>
          <label>
            იმეილი
            <input type="email" {...register("email")} autoComplete="yes" />
          </label>
          {errors.email && (
            <div className={styles.error}>{errors.email.message}</div>
          )}
        </div>

        <div className={styles.field}>
          <label>
            პაროლი
            <input type="password" {...register("password")} />
          </label>
          {errors.password && (
            <div className={styles.error}>{errors.password.message}</div>
          )}
        </div>

        <div className={styles.field}>
          <label>
            ტელეფონი
            <input {...register("phone")} autoComplete="yes" />
          </label>
          {errors.phone && (
            <div className={styles.error}>{errors.phone.message}</div>
          )}
        </div>

        <button type="submit">რეგისტრაცია</button>

        {isSubmitSuccessful && (
          <p
            style={{ textAlign: "center", marginTop: "1rem", color: "#28a745" }}
          >
            წარმატებით გაიგზავნა!
          </p>
        )}
      </form>
    </div>
  );
}
