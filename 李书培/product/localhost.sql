-- phpMyAdmin SQL Dump
-- version 2.11.2.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 05 月 20 日 07:57
-- 服务器版本: 5.0.45
-- PHP 版本: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `products`
--
DROP DATABASE IF EXISTS `products`;
CREATE DATABASE `products` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `products`;

-- --------------------------------------------------------

--
-- 表的结构 `productsshop`
--

DROP TABLE IF EXISTS `productsshop`;
CREATE TABLE IF NOT EXISTS `productsshop` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(255) collate utf8_unicode_ci NOT NULL,
  `price` varchar(20) collate utf8_unicode_ci NOT NULL,
  `imgs` varchar(264) collate utf8_unicode_ci NOT NULL,
  `seletotal` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- 导出表中的数据 `productsshop`
--

INSERT INTO `productsshop` (`id`, `name`, `price`, `imgs`, `seletotal`) VALUES
(1, 'love line系列初心套链', '8999', 'images/product1.jpg', 5),
(2, 'love line系列初心耳饰', '15200', 'images/product2.jpg', 3),
(3, 'love line系列甜蜜套链', '5999', 'images/product3.jpg', 10),
(4, 'love line系列心动款套链 20分 H色', '129999', 'images/product4.jpg', 7);
