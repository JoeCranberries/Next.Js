import { Menu } from "@headlessui/react";
import React from "react";

export default function DropownLink({ href, children }) {
    return (
        <div>
            <Menu.Item>
                <a
                    href={href}
                    className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block"
                >
                    {children}
                </a>
            </Menu.Item>
        </div>
    );
}
