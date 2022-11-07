/*
  Warnings:

  - You are about to drop the column `address` on the `user` table. All the data in the column will be lost.
  - Added the required column `address` to the `about` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `about` ADD COLUMN `address` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `address`;
