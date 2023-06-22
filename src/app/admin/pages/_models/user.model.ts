export interface User {
  id: number;
  name: string;
  username?: string; // optional
  email: string;
  company?: UserCompany;
}

// DTO aynısı buraya model olarak açılıyor.
// GET isteklerinden dönen her response için DTO açarız.

interface UserCompany {
  name: string;
}
