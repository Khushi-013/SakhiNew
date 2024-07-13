import React from "react";
import PropTypes from "prop-types";

const shapes={
    round:"rounded-[20px]",
    square:"rounded-[0px]",
};

const variants={
    fill:{
        light_green_A700:"bg-light_green-A700 text-white-A700_01",
        green_200: " bg-green-200 text-green-900_07",
        green_900_07: "bg-green-900-08 text-white-A700_01",
        blue_gray_100: "bg-blue_gray-100 text-black-900",
        gray_600_03:"bg-gray-600_03 text-white-A700_01",
        purple_200: "bg-purple-200 text-black-900",
        green_900_03:"bg-green-900_03 text-white-A700_01",
        green_100_01: "bg-green-100_01 text-green-900",
    },
    outline:{
        gray_50:"border-gray-50 border border-solid text-white-A700_01",
    },
};

const sizes={
    sm:"h-[59px] pl-[19px] pr-[35px] text-2xl",
    "7xl":"h-[121px] px-[35px] text-[64px]",
    "4xl":"h-[80px] px-[35px] text-[32px]",
    "3xl":"h-[78px] px-[35px] text-[40px]",
    "6xl":"h-[116px] px-[35px] text-5xl",
    md:"h-[60px]",
    "5xl":"h-[115px] px-[35px] text-[34px]",
    lg:"h-[77px] px-5 text-2xl",
    xl:"h-[77px] px-[35px] text-4xl",
    xs:"h-[30px]",
    "2xl":"h-[77px] px-[35px] text-2xl",
};

const Button=({
    children,
    className= "",
    leftIcon,
    rightIcon,
    shape,
    varint="outline",
    size="2xl",
    color="gray_50",
    ...restProps
})=>{
    return(
        <button
          className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape])||""} ${(size && sizes[size])||""} ${(variant && variants[variant]?.[color])||""}`}
          {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes={
    className:PropTypes.string,
    children:PropTypes.node,
    leftIcon:PropTypes.node,
    rightIcon:PropTypes.node,
    shape:PropTypes.oneOf(["round","square"]),
    size:PropTypes.oneOf(["sm","7xl","4xl","3xl","6xl","md","5xl","lg","xl","xs","2xl"]),
    variant:PropTypes.oneOf(["fill","outline"]),
    color:PropTypes.oneOf([
        "light_green_A700",
        "green_200",
        "green_900_07",
        "blue_gray_100",
        "gray_600_03",
        "purple_200",
        "green_900_03",
        "green_100_01",
        "gray_50,"
    ]),
};

export {Button};