-- CreateTable
CREATE TABLE "products-table" (
    "id" SERIAL NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "unitsLeft" INTEGER NOT NULL,
    "pricePerUnit" DOUBLE PRECISION NOT NULL,
    "isOnOffer" BOOLEAN NOT NULL,

    CONSTRAINT "products-table_pkey" PRIMARY KEY ("id")
);
