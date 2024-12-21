import React from "react";
import Container from "../container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b">
      <Container designs="flex justify-between">
        <div className="flex gap-10 items-center ">
          <Link
            to={"/"}
            className="font-bold text-xl md:text-2xl flex items-center me-10"
          >
            <img src="/logo.png" className="relative" alt="logo" width={72} />
            <span className="absolute top-10 left-[50px]">Tr ipster</span>
          </Link>
          <nav className="flex gap-5 items-center">
            <Link to={"/"}>Oteller</Link>
            <Link className="max-md:hidden" to={"/"}>
              Popüler
            </Link>
            <Link
              className="font-bold underline hover:text-zinc-500 rounded p-1"
              to={"/create"}
            >
              Oluştur
            </Link>
          </nav>
        </div>
        <div className="flex gap-2 items-center">
          <button className="border border-blue-500 hover:bg-blue-100 rounded-full py-1 px-5 max-md:hidden">
            Kayıt Ol
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-1 px-5">
            Giriş Yap
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
