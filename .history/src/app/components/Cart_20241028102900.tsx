import { useAppSelector } from "@/redux";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";

const Cart = ({setShowCart} : any) => {
    const products = useAppSelector((state) => state.cartReducer);
    const getTotal = () => {
        let total = 0;
        products.forEach((item) => (total = total + item.price * item.quantity));
        return total;
    };
    return(
        <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overlay-y-scroll">
            <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
                <RxCross1 className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer" onClick={() => setShowCart(false)}/>
                    <h3 className="pt-6 text-lg font-medium text-gray-6-- uppercase">
                        Your Cart
                    </h3>
                    <div className="mt-6 space-y-2">
                        {products?.map((item:any) => (
                            <CartProduct
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}/>
                        ))}
                    </div>
                    <div className="flex justify-between items-center font-medium text-xl py-4">
                        <p>Total:</p>
                        <p>${getTotal()}.00</p>
                    </div>
                    <button className="bg-black text-white text-center w-full rounded-3xl py-2 mt-3 hover:bg-rose-800">CheckOut</button>
            </div>
        </div>
    )
}
export default Cart;