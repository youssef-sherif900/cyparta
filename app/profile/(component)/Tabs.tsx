import React from 'react'

function Tabs() {
  return (
    <div className="flex ">
      <h3 className="p-3 flex items-center justify-center text-[#EC232B] border-b-2 border-b-[#EC232B]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 21C15.866 21 19 19.2091 19 17C19 14.7909 15.866 13 12 13C8.13401 13 5 14.7909 5 17C5 19.2091 8.13401 21 12 21Z"
            fill="#EC232B"
          />
        </svg>
        Personal Information
      </h3>
      <h3 className="p-3 flex items-center justify-center border-b-2 border-gray-300">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
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
        Professional Information
      </h3>
      <h3 className="p-3 flex items-center justify-center border-b-2 border-gray-300">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M4 6C4 3.79086 5.79086 2 8 2H15.3431C16.404 2 17.4214 2.42143 18.1716 3.17157L20.8284 5.82843C21.5786 6.57857 22 7.59599 22 8.65685V18C22 20.2091 20.2091 22 18 22H8C5.79086 22 4 20.2091 4 18V6Z"
            stroke="#16151C"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M9 7L17 7"
            stroke="#16151C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M9 12H17"
            stroke="#16151C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M9 17H13"
            stroke="#16151C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        Document
      </h3>
      <h3 className="p-3 flex items-center justify-center border-b-2 border-gray-300">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <rect
            x="4"
            y="7"
            width="16"
            height="14"
            rx="4"
            stroke="#16151C"
            stroke-width="1.5"
          />
          <circle
            cx="12"
            cy="14"
            r="2"
            stroke="#16151C"
            stroke-width="1.5"
          />
          <path
            d="M16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7"
            stroke="#16151C"
            stroke-width="1.5"
          />
        </svg>
        Account Access
      </h3>
    </div>
  )
}

export default Tabs