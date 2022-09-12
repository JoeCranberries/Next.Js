import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Guest from "../layouts/Guest";

export default function Login() {
    return (
        <div>
            <form>
                <div className="mb-6">
                    <Label
                        htmlFor="email"
                        className="block mb-1 font-medium text-sm text-gray-600"
                    >
                        Email
                    </Label>
                    <Input id="email" name="email" placeholder="john@domain" />
                </div>
                <div className="mb-6">
                    <Label forInput="password">Password</Label>
                    <Input id="password" name="password" />
                </div>

                <div className="mb-5 flex justify-between">
                    <Checkbox
                        forInput={"remember"}
                        label={"remember"}
                        name="remember"
                        id="remember"
                    />
                    <a href="#" className="text-indigo-500 font-medium">
                        Forgot Password
                    </a>
                </div>
                <Button>Login</Button>
            </form>
        </div>
    );
}
Login.getLayout = (page) => (
    <Guest header="login" title="Login" children={page} />
);
