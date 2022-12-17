import React, { useContext } from 'react'
import productContext from '../../Contexts/ProductContext'
import './Toast.css'
import { MdOutlineClose } from "react-icons/md";
export default function Toast() {
    const contextData = useContext(productContext)
    return (
        <div>
            <div className="toastContainer">
                <div className={`carTtoast ${contextData.isShowToast ? 'show' : ''}`}>
                    <div className="carTtoastBody">
                        <MdOutlineClose cursor={'pointer'} size={25} onClick={()=>{
                            contextData.setIsShowToast(false)
                        }}/>
                        <p>محصول با موفقیت اضافه شد</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
