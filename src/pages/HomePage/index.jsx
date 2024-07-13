import React from "react";
import {Helmet} from "react-helmet";
import {Img, Button, Text} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function HomePagePage(){
    return(
        <><Helmet>
            <title>Sakhi</title>
            <meta name="description" content="Web site created using create-react-app" />
        </Helmet><div className="w-full bg-white-A700_01">
                <div>
                    <Header className="bg-white-A700+01 pr-7 sm:pr-5" />
                    <div className="flex bg-pink-900_a3 p-[9px]">
                        <div className="mx-auto my-3 flex w-full max-w-[1410px] gap-4 md:flex-col">
                            <div className="relativ h-[77px] w-[10%] md:h-auto md:w-full">
                                <img src="images/img_image_6.png" alt="imagessix_one" className="h-[30px] w-[30px] object-cover" />
                                <Text size="4xl" as="p" className="!text-white-A700_01">
                                    All
                                </Text>
                            </div>
                            <div>
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[77px] w-full border border-solid border-gray-50" />
                            </div>
                            <Button shape="square" className="w-full flex-1 md:slef-stretch sm:px-5">
                                About
                            </Button>
                            <Button shape="square" className="w-full flex-1 md:slef-stretch sm:px-5">
                                Shop
                            </Button>
                            <Button shape="square" className="w-full flex-1 md:slef-stretch sm:px-5">
                                Sell
                            </Button>
                            <Button shape="square" className="w-full flex-1 md:slef-stretch sm:px-5">
                                Explore
                            </Button>
                            <a href="https://www.youtube.com/embedbv8Fxk0sz7I" target="_blank">
                                <Button shape="square" className="w-full flex-1 md:slef-stretch sm:px-5">
                                    Community
                                </Button>
                            </a>
                            <a href="https://www.youtube.com/embedbv8Fxk0sz7I" target="_blank">
                                <Button shape="square" className="w-full flex-1 md:slef-stretch sm:px-5">
                                    Mentorship
                                </Button>
                            </a>
                            <a href="https://www.youtube.com/embedbv8Fxk0sz7I" target="_blank">
                                <Button shape="square" className="w-full flex-1 md:slef-stretch sm:px-5">
                                    Resources
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div></>
    );
}