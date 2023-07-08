import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";
import { program } from "commander";

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse()
const options = program.opts()


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await listContacts();
      return console.log(list);
    case "get":
      const contact = await getContactById(id);
      return console.log(contact);

    case "add":
      const newContact = await addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const delContact = await removeContact(id);
      return console.log(delContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(options);
