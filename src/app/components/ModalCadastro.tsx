import { IoClose } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import Image from "next/image";

function ModalCadastro(){
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-md text-preto bg-white">
            <div className="bg-cinza p-8 rounded-md shadow-md relative h-5/6 w-4/5 sm:w-1/2">
                <div className="block">
                    <IoMdArrowBack className="absolute left-3 pt-1"/>
                    <IoClose className="absolute right-3 pt-1"/>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={58}
                        height={58}
                        className="absolute left-6 pt-4 h-10"
                    />
                </div>
                <p className="text-xs pt-10 sm:text-sm md:text-base lg:text-2xl">
                    Crie sua conta no Booking da Shopee.
                </p>
                <form action="#" method="post">
                    <div className="flex flex-row">
                        <div className="w-1/2 mr-3">
                            <label className="text-xs sm:text-sm" htmlFor="fname">Nome</label>
                            <input className="w-full border-2 rounded-md border-gray-500" type="text" id="fname" name="fname" required />
                        </div>
                        <div className="w-1/2">
                            <label className="text-xs sm:text-sm" htmlFor="lname">Sobrenome</label>
                            <input className="w-full border-2 rounded-md border-gray-500" type="text" id="lname" name="lname" required />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs sm:text-sm" htmlFor="email">Email</label>
                        <input className="w-full border-2 rounded-md border-gray-500" type="email" id="email" name="email" required />
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 md:mr-3">
                            <label className="text-xs sm:text-sm" htmlFor="password">Senha</label>
                            <input className="w-full pl-1 border-2 rounded-md border-gray-500" type="password" id="password" name="password" required />
                            
                        </div>
                        <div className="w-full md:w-1/2">
                            <label className="text-xs sm:text-sm" htmlFor="confirm_password">Confirmar senha</label>
                            <input className="w-full border-2 rounded-md border-gray-500" type="password" id="confirm_password" name="confirm_password" required />
                        </div>
                    </div>
                    <div className="flex flex-row pt-5">
                        <input type="checkbox" name="updates" id="updates" />
                        <p className="pl-2 text-xs">
                            Sim, quero saber das ofertas e dos novos recursos.
                        </p>
                    </div>
                    <div className="flex justify-center mt-3 md:mt-8">
                        <input className="w-3/5 h-10 bg-azul text-cinza hover:cursor-pointer rounded-lg" type="submit" value="Criar conta" />
                    </div>
                </form>
                <div className="text-center text-xs mt-3">
                    <p>
                        Ao continuar, você concorda com os Termos de uso e confirma que leu nossa Política de privacidade e cookies.
                    </p>
                    <p>
                        Este site é protegido por reCAPTCHA e sujeito à Política de privacidade e aos Termos de serviço do Google.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ModalCadastro;