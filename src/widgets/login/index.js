import { useLogin } from "./useLogin";

export const LoginWidget = ({ show }) => {
  const { loading, register, login } = useLogin();
  return (
    <form
      className="flex flex-col items-center w-10/12 mx-auto mt-5 gap-2"
      onSubmit={show ? register : login}
    >
      {show ? (
        <div className="w-full relative group">
          <input
            type="text"
            id="firstname"
            placeholder=" "
            required
            className="placeholder-white appearance-none focus:ring-0 peer w-full bg-white h-12 rounded-md px-5 py-2.5 border-solid border-2 border-slate-200 outline-none"
          />
          <label
            htmlFor="firstname"
            className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-4/6 peer-valid:-translate-y-4/6 group-focus-within:pl-1 peer-valid:pl-1"
          >
            First Name:
          </label>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      {show ? (
        <div className="w-full relative group">
          <input
            type="text"
            id="lastname"
            placeholder=" "
            required
            className="placeholder-white appearance-none focus:ring-0 peer w-full bg-white h-12 rounded-md px-5 py-2.5 border-solid border-2 border-slate-200 outline-none"
          />
          <label
            htmlFor="lastname"
            className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-4/6 peer-valid:-translate-y-4/6 group-focus-within:pl-1 peer-valid:pl-1"
          >
            Last Name:
          </label>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      <div className="w-full relative group">
        <input
          type="text"
          id="username"
          placeholder=" "
          name="username"
          required
          className="placeholder-white appearance-none focus:ring-0 peer w-full bg-white h-12 rounded-md px-5 py-2.5 border-solid border-2 border-slate-200 outline-none"
        />
        <label
          htmlFor="username"
          className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-4/6 peer-valid:-translate-y-4/6 group-focus-within:pl-1 peer-valid:pl-1"
        >
          Username:
        </label>
      </div>
      <div className="w-full relative group">
        <input
          type="password"
          id="password"
          placeholder=" "
          name="password"
          required
          className="placeholder-white appearance-none focus:ring-0 peer w-full bg-white h-12 rounded-md px-5 py-2.5 border-solid border-2 border-slate-200 outline-none"
        />
        <label
          htmlFor="password"
          className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-4/6 peer-valid:-translate-y-4/6 group-focus-within:pl-1 peer-valid:pl-1"
        >
          Password:
        </label>
      </div>
      <button className="w-full text-sm py-4 px-2.5 bg-black text-white rounded-md mt-3 hover:bg-red duration-300">
        Үргэлжлүүлэх
      </button>
    </form>
  );
};
