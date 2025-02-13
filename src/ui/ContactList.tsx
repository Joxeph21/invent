import { CustomerType } from "./Customer";

interface ContactProps {
  contact: CustomerType;
}

const ContactList = ({ contact }: ContactProps) => {
  return (
    <li className="flex p-3 hover:bg-gray-50 cursor-pointer border-b items-center gap-2">
      <input type="checkbox" className="cursor-pointer" name="" id="" />
      <h2 className="text-sm text-[#212121] font-semibold">
        {contact.full_name}
      </h2>
    </li>
  );
};

export default ContactList;
