import React from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const {cart, clearCart} = useContext(CartContext);

  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2x1 md:w-[35vw] x1:max-w-[30vw] transition-all duration-300 z-20 px-4 1g:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        {/* icon */}
        <div
          onClick={handleClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className="text-2x1" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map(item =>{
          return <CartItem item ={item} key={item.id}/> 
        })}

        
      </div>
      <div className="bg-pink-200 flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ 1000
          </div>
          <div onClick={clearCart} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center tems-center text-xl">
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
