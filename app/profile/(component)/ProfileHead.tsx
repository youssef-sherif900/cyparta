import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function ProfileHead({data}:any) {
  return (
    <div className=' w-full'>
    <div className="flex justify-end mr-5 mt-5">
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="scale-75 mr-4"
    >
      <rect
        width="50"
        height="50"
        rx="10"
        fill="#A2A1A8"
        fill-opacity="0.1"
      />
      <path
        d="M18.6796 21.794C19.0538 18.4909 21.7709 16 25 16C28.2291 16 30.9462 18.4909 31.3204 21.794L31.6652 24.8385C31.7509 25.595 32.0575 26.3069 32.5445 26.88C33.5779 28.0964 32.7392 30 31.1699 30H18.8301C17.2608 30 16.4221 28.0964 17.4555 26.88C17.9425 26.3069 18.2491 25.595 18.3348 24.8385L18.6796 21.794Z"
        stroke="#16151C"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M28 32C27.5633 33.1652 26.385 34 25 34C23.615 34 22.4367 33.1652 22 32"
        stroke="#16151C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
    <Image
      className="rounded-3xl scale-90"
      height={50}
      width={50}
      alt="profile"
      src={data.image}
    />
  </div>

  <div className="p-3 pt-0">
    <Breadcrumb className="">
      <BreadcrumbList>
        <BreadcrumbItem>Employees</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>profile</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <div className="flex justify-between items-end mt-4">
      <div className="flex">
        <Image
          className="rounded-lg"
          height={90}
          width={90}
          src={data.image}
          alt="profile pic"
        />
        <div className="p-2">
          <h1 className="font-semibold text-md">
            {data.first_name} {data.last_name}
          </h1>
          <p className="font-light text-sm flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="scale-75"
            >
              <path
                d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6M2 10.3475C2 10.3475 5.11804 12.4244 9.97767 12.9109M22 10.3475C22 10.3475 18.882 12.4244 14.0223 12.9109M6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22Z"
                stroke="#16151C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M14 12.16V13.16C14 13.17 14 13.17 14 13.18C14 14.27 13.99 15.16 12 15.16C10.02 15.16 10 14.28 10 13.19V12.16C10 11.16 10 11.16 11 11.16H13C14 11.16 14 11.16 14 12.16Z"
                stroke="#16151C"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            UX/UI DESIGNER
          </p>
          <p className="font-light text-sm flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="scale-75"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="18"
                rx="4"
                stroke="#16151C"
                stroke-width="1.5"
              />
              <path
                d="M2 7L9.50122 13.001C10.9621 14.1697 13.0379 14.1697 14.4988 13.001L22 7"
                stroke="#16151C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {data.email}
          </p>
        </div>
      </div>
      <Button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 scale-90"
        >
          <path
            d="M3 21H21M13.7844 5.31171C13.7844 5.31171 13.7844 6.94634 15.419 8.58096C17.0537 10.2156 18.6883 10.2156 18.6883 10.2156M7.31963 17.9881L10.7523 17.4977C11.2475 17.4269 11.7064 17.1975 12.06 16.8438L20.3229 8.58096C21.2257 7.67818 21.2257 6.21449 20.3229 5.31171L18.6883 3.67708C17.7855 2.77431 16.3218 2.77431 15.419 3.67708L7.15616 11.94C6.80248 12.2936 6.57305 12.7525 6.50231 13.2477L6.01193 16.6804C5.90295 17.4432 6.5568 18.097 7.31963 17.9881Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        Edit Profile
      </Button>
    </div>
  </div>
  </div>
  )
}

export default ProfileHead