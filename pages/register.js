import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Select from "../components/Select";
import Guest from "../layouts/Guest";

export default function Register() {
    return (
        <div>
            <form>
                <div className="mb-6">
                    <Label
                        htmlFor="name"
                        className="block mb-1 font-medium text-sm text-gray-600"
                    >
                        Name
                    </Label>
                    <Input id="name" name="name" />
                </div>
                <div className="mb-6">
                    <Label
                        htmlFor="email"
                        className="block mb-1 font-medium text-sm text-gray-600"
                    >
                        Email
                    </Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@domain"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <div className="mb-6">
                        <Label forInput="password">Password</Label>
                        <Input id="password" name="password" />
                    </div>
                    <div className="mb-6">
                        <Label forInput="password_confirmation">
                            Confirm Password
                        </Label>
                        <Input
                            id="password_confirmation"
                            name="password_confirmation"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <Label forInput={"gender"}>Gender</Label>
                    <Select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Select>
                </div>
                <div className="mb-6 flex justify-between">
                    <Checkbox
                        forInput={"acceptance"}
                        label={"Aggree with Privacy and Terms"}
                        name="acceptance"
                        id="acceptance"
                    />
                    <a href="#">Forgot Password</a>
                </div>
                <div className="flex items-center justify-between">
                    <Button>Register</Button>
                    <span>
                        Already have account ? {""}
                        <Link href="/login">
                            <a clasName=" text-indigo-500 font-medium">Login</a>
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
}
Register.getLayout = (page) => (
    <Guest
        cardClassName="lg:w-2/5"
        header="register"
        title="Register"
        children={page}
    />
);
