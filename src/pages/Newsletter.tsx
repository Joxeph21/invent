import BoxBanner from "../ui/BoxBanner";
import SearchBox from "../ui/SearchBox";
import { customers } from "./CustomersPage";
import ContactList from "../ui/ContactList";
import Button from "../ui/Button";
import NewsletterForm from "../form/NewsletterForm";
import Empty from "../ui/Empty";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import EmptySearch from "../ui/EmptySearch";

export default function Newsletter() {
  const subscribers = customers.filter((customer) => customer.isSubscribed);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const searchedResults = useMemo(() => {
    if (!query) return subscribers;
    const results = subscribers.filter((customer) =>
      customer.full_name.toLowerCase().includes(query.toLowerCase())
    );
    return results;
  }, [query]);

  return (
    <BoxBanner>
      <div className="w-full bg-white shadow-sm p-4 rounded-md flex items-center justify-between ">
        <h1 className="text-2xl font-semibold">Newsletter</h1>
      </div>
      <div className="w-full  grid gap-4  grid-cols-[24rem_auto]">
        <div className="bg-white p-4 rounded-md order-2 shadow-md">
          <div className="space-y-2 border-b pb-3">
            <h2 className="font-semibold text-lg">Send a Newsletter</h2>
            <p className="text-gray-600 font-semibold text-xs">
              Send an email newsletter to all contacts or selected contacts
            </p>
          </div>

          <NewsletterForm />
        </div>
        <aside className="bg-white flex flex-col gap-4 p-4 rounded-md shadow-md">
          <div className="space-y-2">
            <h2 className="font-semibold text-lg">Contacts</h2>
            <SearchBox placeholder="Search by customer name" />
          </div>
          <div className="space-y-3">
            <p className="flex items-center justify-between w-full border-b py-3 text-xs font-normal">
              <span className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <label htmlFor="checkbox">Select all</label>
              </span>
              <span className="text-brandGreen">(0) Selected</span>
              <span className="text-brandGreen font-semibold">
                ({subscribers.length}) Contacts Found
              </span>
            </p>

            {subscribers.length === 0 ? (
              <Empty name="Subscribers" />
            ) : (
              <ul className="w-full flex flex-col border-[1px]  rounded-md p-2 gap-2">
                {searchedResults.length === 0 ? (
                  <EmptySearch />
                ) : (
                  searchedResults.map((item) => (
                    <ContactList key={item.id} contact={item} />
                  ))
                )}
              </ul>
            )}
          </div>
          {/* <Button size="large" type="primary">
            Add Contact
          </Button> */}
        </aside>
      </div>
    </BoxBanner>
  );
}
