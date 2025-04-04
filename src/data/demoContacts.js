const DEMO_CONTACTS = {
    daniel: {
      username: "daniel",
      name: "Daniel.Tuấn",
      title: "Software Developer",
      company: "De heus",
      email: "qtuan1106@gmail.com",
      phone: "+84 824312814",
      address: "09 Nguyễn Lữ",
      website: "https://daniel11.github.io",
      bio: "Gen z",
      profileImage: `${process.env.PUBLIC_URL}/images/profile.png`,
      socials: {
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        github: "https://github.com/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      bankAccounts: [
        {
          bankName: "Techcombank",
          accountNumber: "1106018386",
          accountType: "Checking",
          routingNumber: "TECHCOMBANK",
          swift: "VTCBVNVX",
        },
      ],
      taxNumber: "123-45-6789",
      identificationNumber: "AB-123456789",
    },
  
    thien: {
      username: "thien",
      name: "Nguyễn Ngọc Thiện",
      title: "Frontend Engineer",
      company: "VinAI",
      email: "ngocthien@gmail.com",
      phone: "+84 912345678",
      address: "123 Pasteur, HCMC",
      website: "https://ngocthien.dev",
      bio: "Just vibes & code",
      profileImage: `${process.env.PUBLIC_URL}/images/thien.png`,
      socials: {
        linkedin: "https://linkedin.com/in/ngocthien",
        github: "https://github.com/ngocthien",
      },
      bankAccounts: [
        {
          bankName: "Vietcombank",
          accountNumber: "123456789",
          accountType: "Savings",
          routingNumber: "VCB",
          swift: "BFTVVNVX",
        },
      ],
      taxNumber: "987-65-4321",
      identificationNumber: "CD-987654321",
    },
  };
  
  export default DEMO_CONTACTS;
  