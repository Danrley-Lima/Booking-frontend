"use client";
import { FormEvent, useState } from "react";
import Input from "./Input";
import { showToast } from "../utils/ToastHelper";
import axiosInstance from "../axiosConfig";

const defaultFormData: EstablishmentType = {
    userModel: {
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirm_password: "",
        role: "",
    },
    addressModel: {
        zipCode: "",
        streetAddress: "",
        city: "",
        neighborhood: "",
        state: "",
        number: 0,
        complement: "",
    },
    description: "", 
    cnpj: "",
};

function EstablishmentRegistration() {
    const [formData, setFormData] = useState<EstablishmentType>(defaultFormData);

    const dto: EstablishmentType = {
        userModel: {
            name: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirm_password: "",
            role: "",
        },
        addressModel: {
            zipCode: "",
            streetAddress: "",
            city: "",
            neighborhood: "",
            state: "",
            number: 0,
            complement: "",
        },
        description: "", 
        cnpj: "",
    };
    
  function handleInputChange(id: string, value: string) {
    setFormData((prevData) => ({
        ...prevData,
        [id]: value,
        userModel: {
          ...prevData.userModel,
          [id]: value,
        },
        addressModel: {
          ...prevData.addressModel,
          [id]: value,
        },
      }));
    console.log(formData);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObj: any = {
        userModel: {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phoneNumber: formData.get('phoneNumber') as string,
            password: formData.get('password') as string,
            confirm_password: formData.get('confirm_password') as string,
            role: "ESTABLISHMENT", 
        },
        addressModel: {
            zipCode: formData.get('zipCode') as string,
            streetAddress: formData.get('streetAddress') as string,
            city: formData.get('city') as string,
            neighborhood: formData.get('neighborhood') as string,
            state: formData.get('state') as string,
            number: parseInt(formData.get('number') as string), 
            complement: formData.get('complement') as string,
        },
        description: formData.get('description') as string,
        cnpj: formData.get('cnpj') as string,
    };
    console.log(formDataObj)
    try {
        const response = await axiosInstance.post(
          "http://localhost:8080/api/establishment/",
          {
            formDataObj
          }
        );
  
        showToast("success", "Usuário cadastrado com sucesso!");
        console.log(response);
      } catch (error) {
        showToast("error", "Erro ao cadastrar usuário!");
      }

    console.log(formData);
  }

    return(
        <div className="container mx-auto w-1/2 mt-10  mb-10 flex items-center justify-center">
             <div className="flex flex-col justify-between bg-cinza p-8 rounded-lg shadow-md h-3/4 w-screen">
                <div className="relative">
                    <p className="text-center font-bold mb-5 text-xl sm:text-2xl">
                        Crie sua conta no Booking da Shopee.
                    </p>
                    <form onSubmit={onSubmit} method="post">
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="name"
                                    name="name"
                                    label="Nome"
                                    type="text"
                                    value={formData.userModel.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    id="cnpj"
                                    name="cnpj"
                                    label="CNPJ"
                                    type="masked"
                                    mask="99.999.999/9999-99"
                                    value={formData.cnpj}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="text"
                                    value={formData.userModel.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Telefone"
                                    type="masked"
                                    mask="(99) 9 9999-9999"
                                    value={formData.userModel.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="zipCode"
                                    name="zipCode"
                                    label="CEP"
                                    type="masked"
                                    mask="99999-999"
                                    value={formData.addressModel.zipCode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="streetAddress"
                                    name="streetAddress"
                                    label="Endereço"
                                    type="text"
                                    value={formData.addressModel.streetAddress}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    id="city"
                                    name="city"
                                    label="Cidade"
                                    type="text"
                                    value={formData.addressModel.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="neighborhood"
                                    name="neighborhood"
                                    label="Bairro"
                                    type="text"
                                    value={formData.addressModel.neighborhood}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="state"
                                    name="state"
                                    label="Estado"
                                    type="text"
                                    value={formData.addressModel.state}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2 mr-3">
                                <Input
                                    id="number"
                                    name="number"
                                    label="Número"
                                    type="text"
                                    value={formData.addressModel.number}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    id="complement"
                                    name="complement"
                                    label="Complemento"
                                    type="text"
                                    value={formData.addressModel.complement}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 md:mr-3">
                                <Input
                                    id="password"
                                    name="password"
                                    label="Senha"
                                    type="text"
                                    value={formData.userModel.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <Input
                                    id="confirm_password"
                                    name="confirm_password"
                                    label="Confirme a senha"
                                    type="text"
                                    value={formData.userModel.confirm_password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-3 md:mt-8">
                            <input className="w-3/5 h-10 bg-azul text-cinza hover:cursor-pointer rounded-lg" type="submit" value="Criar conta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EstablishmentRegistration;