import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, ShieldCheckIcon, BriefcaseIcon, UsersRound } from "lucide-react";

import image from "../assets/react.svg";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">

      <Card className="absolute w-[380px] right-[360px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-2 rounded-2xl">
            <UsersRound className="text-primary" size={32} />
          </div>
          <div>
            <CardTitle>Lorem Ipsum</CardTitle>
            <CardDescription className="text-md mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardContent>
          <img
            src={image}
            alt="image-hero"
            className="mt-5 rounded-lg"
          />
        </CardContent>
      </Card>

      <Card className="absolute top-[140px] w-[320px] left-5 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-2 rounded-2xl">
            <BriefcaseIcon className="text-primary" size={32} />
          </div>
          <div>
            <CardTitle>Services</CardTitle>
            <CardDescription className="text-md mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <a href="#services" className="w-full md:w-1/3">
            <Button>Find out more</Button>
          </a>
        </CardContent>
        <hr className="w-4/5 m-auto mb-4" />
        <CardFooter className="flex">
          <div className="space-y-4">
            {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      <Card className="absolute w-[300px] right-[40px] bottom-[-5px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-2 rounded-2xl">
            <ShieldCheckIcon className="text-primary" size={32} />
          </div>
          <div>
            <CardTitle>Lorem Ipsum</CardTitle>
            <CardDescription className="text-md mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
