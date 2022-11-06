-- CreateTable
CREATE TABLE `languages` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `flag_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `linkedin` VARCHAR(191) NOT NULL,
    `github` VARCHAR(191) NOT NULL,
    `youtube` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `about` (
    `id_language` VARCHAR(191) NOT NULL,
    `person_resume` VARCHAR(191) NOT NULL,
    `professional_resume` VARCHAR(191) NOT NULL,
    `cv_url` VARCHAR(191) NOT NULL,
    `soft_skill_description` VARCHAR(191) NOT NULL,
    `hard_skill_description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `about_id_language_key`(`id_language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `soft_skills` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `soft_skill_details` (
    `id_language` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `id_soft_skill` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `soft_skill_details_id_language_key`(`id_language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `courses` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_details` (
    `id_language` VARCHAR(191) NOT NULL,
    `course` VARCHAR(191) NOT NULL,
    `college` VARCHAR(191) NOT NULL,
    `year` DATETIME(3) NOT NULL,
    `id_course` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `course_details_id_language_key`(`id_language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `education` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `education_details` (
    `id_language` VARCHAR(191) NOT NULL,
    `course` VARCHAR(191) NOT NULL,
    `start` DATETIME(3) NOT NULL,
    `the_end` DATETIME(3) NOT NULL,
    `current` BOOLEAN NOT NULL,
    `id_education` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `education_details_id_language_key`(`id_language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `certificates` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `certificate_details` (
    `id_language` VARCHAR(191) NOT NULL,
    `certificate_issuer` VARCHAR(191) NOT NULL,
    `certificates` VARCHAR(191) NOT NULL,
    `year` DATETIME(3) NOT NULL,
    `id_certificate` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `certificate_details_id_language_key`(`id_language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `work_experience` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `work_details` (
    `id_language` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `job_role` VARCHAR(191) NOT NULL,
    `start` DATETIME(3) NOT NULL,
    `the_end` DATETIME(3) NOT NULL,
    `current` BOOLEAN NOT NULL,
    `seniority` VARCHAR(191) NOT NULL,
    `activities` VARCHAR(191) NOT NULL,
    `id_work_experience` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `work_details_id_language_key`(`id_language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `technologies` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `primary_image_url` VARCHAR(191) NOT NULL,
    `light_image_url` VARCHAR(191) NOT NULL,
    `dark_image_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `my_interests` (
    `id` VARCHAR(191) NOT NULL,
    `id_technology` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stack` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hard_skills` (
    `id` VARCHAR(191) NOT NULL,
    `id_technology` VARCHAR(191) NOT NULL,
    `id_stack` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projects` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `banner_url` VARCHAR(191) NOT NULL,
    `website_url` VARCHAR(191) NOT NULL,
    `github_url` VARCHAR(191) NOT NULL,
    `figma_url` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project_stacks` (
    `id` VARCHAR(191) NOT NULL,
    `id_project` VARCHAR(191) NOT NULL,
    `id_stack` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project_technologies` (
    `id` VARCHAR(191) NOT NULL,
    `id_project` VARCHAR(191) NOT NULL,
    `id_technology` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project_description` (
    `id_language` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `id_project` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `project_description_id_language_key`(`id_language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `about` ADD CONSTRAINT `about_id_language_fkey` FOREIGN KEY (`id_language`) REFERENCES `languages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `soft_skill_details` ADD CONSTRAINT `soft_skill_details_id_language_fkey` FOREIGN KEY (`id_language`) REFERENCES `languages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `soft_skill_details` ADD CONSTRAINT `soft_skill_details_id_soft_skill_fkey` FOREIGN KEY (`id_soft_skill`) REFERENCES `soft_skills`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_details` ADD CONSTRAINT `course_details_id_language_fkey` FOREIGN KEY (`id_language`) REFERENCES `languages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_details` ADD CONSTRAINT `course_details_id_course_fkey` FOREIGN KEY (`id_course`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `education_details` ADD CONSTRAINT `education_details_id_language_fkey` FOREIGN KEY (`id_language`) REFERENCES `languages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `education_details` ADD CONSTRAINT `education_details_id_education_fkey` FOREIGN KEY (`id_education`) REFERENCES `education`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `certificate_details` ADD CONSTRAINT `certificate_details_id_language_fkey` FOREIGN KEY (`id_language`) REFERENCES `languages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `certificate_details` ADD CONSTRAINT `certificate_details_id_certificate_fkey` FOREIGN KEY (`id_certificate`) REFERENCES `certificates`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `work_details` ADD CONSTRAINT `work_details_id_language_fkey` FOREIGN KEY (`id_language`) REFERENCES `languages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `work_details` ADD CONSTRAINT `work_details_id_work_experience_fkey` FOREIGN KEY (`id_work_experience`) REFERENCES `work_experience`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `my_interests` ADD CONSTRAINT `my_interests_id_technology_fkey` FOREIGN KEY (`id_technology`) REFERENCES `technologies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hard_skills` ADD CONSTRAINT `hard_skills_id_technology_fkey` FOREIGN KEY (`id_technology`) REFERENCES `technologies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hard_skills` ADD CONSTRAINT `hard_skills_id_stack_fkey` FOREIGN KEY (`id_stack`) REFERENCES `stack`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_stacks` ADD CONSTRAINT `project_stacks_id_project_fkey` FOREIGN KEY (`id_project`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_stacks` ADD CONSTRAINT `project_stacks_id_stack_fkey` FOREIGN KEY (`id_stack`) REFERENCES `stack`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_technologies` ADD CONSTRAINT `project_technologies_id_project_fkey` FOREIGN KEY (`id_project`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_technologies` ADD CONSTRAINT `project_technologies_id_technology_fkey` FOREIGN KEY (`id_technology`) REFERENCES `technologies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_description` ADD CONSTRAINT `project_description_id_language_fkey` FOREIGN KEY (`id_language`) REFERENCES `languages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_description` ADD CONSTRAINT `project_description_id_project_fkey` FOREIGN KEY (`id_project`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
