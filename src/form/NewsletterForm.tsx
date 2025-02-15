import Button from "../ui/Button";

const NewsletterForm = ({selectedContacts = 0}: {selectedContacts: number}) => {
  return (
    <form className="flex flex-col w-full py-4 gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-gray-600" htmlFor="title">
          Subject
        </label>
        <input
          className="bg-[#d6d5d51c] p-3 focus:outline-none focus:border-b-[1px] rounded-md text-sm border-b-brandGreen"
          type="text"
          name="title"
          placeholder="Subject"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="text-xs font-semibold text-gray-600"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          name="message"
          className="bg-[#d6d5d529] h-44 resize-none focus:outline-none p-3 text-sm focus:border-[1px] border-brandGreen rounded-md"
          id=""
        />
      </div>

      <Button type="primary" size="large" buttonType="submit">
        {`Send to selected contacts (${selectedContacts})`} 
      </Button>
    </form>
  );
};

export default NewsletterForm;
