import ProfileHead from "./(component)/ProfileHead";
import SideBar from "./(component)/SideBar";
import GridItem from "./(component)/GridItem";
import Tabs from "./(component)/Tabs";
import axios from "axios";
import { cookies } from 'next/headers';
import Link from "next/link";

async function Page() {

    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken');

    if (!accessToken) {
        return <div>No access token found. Please <Link href='/'>login.</Link></div>
    }

console.log("access =" , accessToken?.value)

  const response = await axios.get(
    "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
    {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
      },
    }
  );

  const { data } = response;

  return (
    <div className="flex flex-grow">
      <SideBar />
      <div className="w-full p-4">
        <ProfileHead data={data} />
        <Tabs />
        <div className="grid grid-cols-2 gap-4">
          <GridItem title="First Name" data={data.first_name} />
          <GridItem title="Last Name" data={data.last_name} />
          <GridItem title="Mobile Number" data={data.phone} />
          <GridItem title="Email Address" data={data.email} />
          <GridItem title="Date of Birth" data="July 13, 1995" />
          <GridItem title="Marital Status" data="single" />
          <GridItem title="Gender" data="Female" />
          <GridItem title="Nationality" data="Egypt" />
          <GridItem title="Address" data="Maadi" />
          <GridItem title="City" data="Cairo" />
          <GridItem title="State" data="Cairo" />
          <GridItem title="Zip Code" data="35624" />
          <GridItem title="Work's Hours" data="180 hours" />
          <div className="flex justify-between p-4 pb-2 border-b-2 border-gray-200">
            <div>
              <p className="text-md font-light text-sm text-gray-400">
                salary/hour
              </p>
              <h2 className="text-lg mt-1 font-semibold">300 EGP</h2>
            </div>
            <div className="mr-16">
              <p className="text-md font-light text-sm text-[#EE232F]">
                Total salary
              </p>
              <h2 className="text-lg mt-1 font-semibold">54000 EGP</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
