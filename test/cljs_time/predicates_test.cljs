(ns cljs-time.predicates-test
  (:refer-clojure :exclude [extend second])
  (:require
    [cljs.test :refer-macros [deftest is]]
    [cljs-time.core :refer [date-time]]
    [cljs-time.predicates :refer
     [monday? tuesday? wednesday? thursday? friday? saturday? sunday? weekend?
      weekday? january? february? march? april? may? june? july? august?
      september? october? november? december?
      last-day-of-month? first-day-of-month?
      same-date?]]))

(deftest test-days-of-the-week
  (is (= true (monday? (date-time 2012 9 10))))
  (is (= true (tuesday? (date-time 2012 9 11))))
  (is (= true (wednesday? (date-time 2012 9 12))))
  (is (= true (thursday? (date-time 2012 9 13))))
  (is (= true (friday? (date-time 2012 9 14))))
  (is (= true (saturday? (date-time 2012 9 15))))
  (is (= true (sunday? (date-time 2012 9 16))))
  (is (= false (monday? (date-time 2012 9 16))))
  (is (= true (weekend? (date-time 2012 9 15))))
  (is (= true (weekend? (date-time 2012 9 16))))
  (is (= false (weekend? (date-time 2012 9 10))))
  (is (= true (weekday? (date-time 2012 9 10)))))

(deftest test-months-of-the-year
  (is (= true (january? (date-time 2012 1 10))))
  (is (= true (february? (date-time 2012 2 11))))
  (is (= true (march? (date-time 2012 3 12))))
  (is (= true (april? (date-time 2012 4 13))))
  (is (= true (may? (date-time 2012 5 14))))
  (is (= true (june? (date-time 2012 6 15))))
  (is (= true (july? (date-time 2012 7 16))))
  (is (= true (august? (date-time 2012 8 16))))
  (is (= true (september? (date-time 2012 9 16))))
  (is (= true (october? (date-time 2012 10 16))))
  (is (= true (november? (date-time 2012 11 16))))
  (is (= true (december? (date-time 2012 12 16))))
  (is (= false (january? (date-time 2012 12 31)))))

(deftest test-first-and-last-day-of-month
  (is (= false (first-day-of-month? (date-time 2016 2 2))))
  (is (= true (first-day-of-month? (date-time 2016 2 1))))
  (is (= false (last-day-of-month? (date-time 2016 2 28))))
  (is (= true (last-day-of-month? (date-time 2016 1 31))))
  (is (= true (last-day-of-month? (date-time 2016 2 29)))))

(deftest test-same-date
  (is (= true (same-date? (date-time 2013 10 8) (date-time 2013 10 8))))
  (is (= true (same-date? (date-time 2012 1 1) (date-time 2012 1 1))))
  (is (= false (same-date? (date-time 2012 2 2) (date-time 2012 1 1))))
  (is (= false (same-date? (date-time 2011 2 2) (date-time 2012 2 2)))))
