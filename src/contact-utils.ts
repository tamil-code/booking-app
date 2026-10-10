export type Contact = {
    id:number;
    name: string;
    email: string;
    active:boolean;
}
export type ContactChanges = Partial<Pick<Contact,"name"|"email"|"active">>

export function searchContacts(
    contacts: Contact[],
    query: string,
  ): Contact[] {
  
    const normalizedQuery = query.toLowerCase();
    return contacts.filter((contact: Contact) =>
      contact.name.toLowerCase().includes(normalizedQuery),
    );
  }
  
  export function countByFirstLetter(
    contacts: Contact[],
  ): Record<string, number> {
    
   return  contacts.reduce((counts:Record<string, number> ,contact:Contact)=>{
    const letter = contact.name.charAt(0).toUpperCase();
    counts[letter] = (counts[letter] ?? 0) + 1;
    return counts
  },{} as  Record<string, number> ) 
  
  }
  
  export function sortContactsByName(
    contacts: Contact[],
  ): Contact[] {
    
    return [...contacts].sort((a: Contact, b: Contact) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }
  
  export function updateContact(
    contact: Contact,
    changes: ContactChanges,
  ): Contact {
    
    return {...contact,...changes};
  } 