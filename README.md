# Workall

## **What is Workall?**

- Workall is a web application that is used to search for services that is commonly not found on other digital platforms.

## **Installation**

1. Run `npm install` on your project terminal to install dependencies.
2. Import `workall.sql` to your mySQL server for the database.
3. Add this code to `.env` file:

```
DATABASE_URL="mysql://root:@localhost:3306/workall"
```

4. Run `npx prisma db pull` and `npx prisma generate` in the terminal to create Prisma Schema from the database.
5. Run `npm start` in the terminal to start the localhost server.

## **Features**

### For Business Owners

1. Create your own shop
2. Promote your shop to the masses

### For Users

1. Find services that is not commonly found offline
2. Schedule services to come to you
