import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#fff6f2] text-gray-800 p-4 flex flex-col justify-between  md:pt-15 gap-15 md:pb-10">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:place-items-center">
                <div className="flex items-center md:self-start">
                    <div className="text-orange-500 text-2xl flex gap-5 flex-col">
                        <div className="">
                            <img src="/logo.png" alt="" className="w-64" />
                        </div>
                        <div className=" text-sm text-gray-600">Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit aliquam</div>
                        <div className="flex gap-2">
                            <a href="" className="">
                                <Facebook className="w-5" />
                            </a>
                            <a href="" className="">
                                <Twitter className="w-5" />
                            </a>
                            <a href="" className="">
                                <Instagram className="w-5" />
                            </a>
                            <a href="" className="">
                                <Linkedin className="w-5" />
                            </a>
                            <a href="" className="">
                                <Youtube className="w-5" />
                            </a>

                        </div>
                    </div>

                    <div className="flex space-x-2 mt-2">
                        <a href="#" className="text-orange-500"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-orange-500"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-orange-500"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-orange-500"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="flex flex-col md:gap-5 md:self-start">
                    <h3 className="text-lg font-semibold text-black-900">Product</h3>
                    <ul className="mt-2 space-y-1 text-gray-600 ">
                        <li><a href="#" className="hover:text-blue-900">Features</a></li>
                        <li><a href="#" className="hover:text-blue-900">Pricing</a></li>
                        <li><a href="#" className="hover:text-blue-900">Case studies</a></li>
                        <li><a href="#" className="hover:text-blue-900">Reviews</a></li>
                        <li><a href="#" className="hover:text-blue-900">Updates</a></li>
                    </ul>
                </div>
                <div className="flex flex-col md:gap-5 md:self-start">
                    <h3 className="text-lg font-semibold text-black-900">Contacts us</h3>
                    <ul className="mt-2 space-y-1 text-gray-600">
                        <li><a href="mailto:contact@company.com" className="hover:text-blue-900">contact@company.com</a></li>
                        <li><a href="tel:+14467878992" className="hover:text-blue-900">(414) 687 - 5892</a></li>
                        <li>794 McAllister St</li>
                        <li>San Francisco, 94102</li>
                    </ul>
                </div>
            </section>

            <div className="text-center w-full mt-5 text-sm text-gray-600 lg:flex justify-between lg:w-[75%] mx-auto">
                <p>Copyright © 2022 BRIX Templates</p>
                <p className="text-orange-500">All Rights Reserved | <a href="#" className="underline">Terms and Conditions</a> | <a href="#" className="underline">Privacy Policy</a></p>
            </div>
        </footer>
    );
}