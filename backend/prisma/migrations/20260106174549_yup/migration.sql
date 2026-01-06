/*
  Warnings:

  - You are about to drop the column `upiReference` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `uroPayOrderId` on the `order` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Order_uroPayOrderId_key` ON `order`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `upiReference`,
    DROP COLUMN `uroPayOrderId`,
    ADD COLUMN `paymentIntent` VARCHAR(191) NULL;
