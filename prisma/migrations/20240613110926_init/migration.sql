-- CreateTable
CREATE TABLE `bukti` (
    `id_bukti` INTEGER NOT NULL AUTO_INCREMENT,
    `id_layanan` INTEGER NOT NULL,
    `foto` VARCHAR(255) NOT NULL,
    `deskripsi` VARCHAR(255) NULL,

    INDEX `id_layanan`(`id_layanan`),
    PRIMARY KEY (`id_bukti`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `laporan` (
    `id_laporan` INTEGER NOT NULL AUTO_INCREMENT,
    `isi_laporan` VARCHAR(255) NOT NULL,
    `jenis_laporan` VARCHAR(255) NOT NULL,
    `id_layanan` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,
    `tanggal_laporan` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `id_layanan`(`id_layanan`),
    INDEX `id_user`(`id_user`),
    PRIMARY KEY (`id_laporan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `layanan` (
    `id_layanan` INTEGER NOT NULL AUTO_INCREMENT,
    `id_shop` INTEGER NOT NULL,
    `nama_layanan` VARCHAR(255) NOT NULL,
    `harga_starting` INTEGER NOT NULL,
    `kategori` ENUM('renovasi', 'elektronik', 'plumbing', 'kendaraan', 'penyewaan') NOT NULL,

    INDEX `id_shop`(`id_shop`),
    PRIMARY KEY (`id_layanan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pesanan` (
    `id_pesanan` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal_pesanan` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `harga_terbayar` INTEGER NOT NULL,
    `id_layanan` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,

    INDEX `id_layanan`(`id_layanan`, `id_user`),
    INDEX `id_user`(`id_user`),
    PRIMARY KEY (`id_pesanan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `id_review` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `rating` INTEGER NOT NULL,
    `isi_review` VARCHAR(255) NULL,

    INDEX `id_user`(`id_user`),
    PRIMARY KEY (`id_review`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shop` (
    `id_shop` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_toko` VARCHAR(32) NOT NULL,
    `deskripsi` VARCHAR(255) NULL,
    `status_banned_shop` BOOLEAN NOT NULL,
    `ketersediaan` BOOLEAN NOT NULL,
    `no_rekening` BIGINT NOT NULL,
    `id_user` INTEGER NOT NULL,
    `alamat_toko` VARCHAR(255) NOT NULL,
    `foto_profil_toko` VARCHAR(255) NULL,
    `kontak_toko` BIGINT NOT NULL,

    INDEX `id_user`(`id_user`),
    PRIMARY KEY (`id_shop`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `status_banned_user` BOOLEAN NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `nama_depan` VARCHAR(255) NOT NULL,
    `nama_belakang` VARCHAR(255) NOT NULL,
    `no_hp` BIGINT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bukti` ADD CONSTRAINT `id_layanan` FOREIGN KEY (`id_layanan`) REFERENCES `layanan`(`id_layanan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `laporan` ADD CONSTRAINT `laporan_ibfk_1` FOREIGN KEY (`id_layanan`) REFERENCES `layanan`(`id_layanan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `laporan` ADD CONSTRAINT `laporan_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `layanan` ADD CONSTRAINT `layanan_ibfk_1` FOREIGN KEY (`id_shop`) REFERENCES `shop`(`id_shop`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pesanan` ADD CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `user`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pesanan` ADD CONSTRAINT `pesanan_ibfk_1` FOREIGN KEY (`id_layanan`) REFERENCES `layanan`(`id_layanan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shop` ADD CONSTRAINT `shop_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
