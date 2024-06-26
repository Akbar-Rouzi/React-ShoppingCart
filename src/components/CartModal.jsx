import { useRef, forwardRef, useImperativeHandle} from "react"
import { createPortal } from "react-dom";
import Cart from './Cart';


const CartModal = forwardRef(
    function Modal({ title, actions }, ref) {

        const cartDialog = useRef();
        useImperativeHandle(ref, () => {
            return {
                open: () => {
                    cartDialog.current.showModal()
                }
            }
        })

        return createPortal(
            <dialog id="modal" ref={cartDialog}>
                <h2>{title}</h2>
                <Cart />
                <form method="dialog" id="modal-actions">
                    {actions}
                </form>
            </dialog>,
            document.getElementById('modal')
        )
    }
)


export default CartModal;

