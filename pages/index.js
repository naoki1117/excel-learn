import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Details } from "../components/Details";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>excel learn</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 style={{ marginBottom: "5px" }}>excel実技</h1>
        <h2>導入_day1</h2>
        <ol>
          <Details
            summary="excelの概要"
            detail1="エクセルとは?"
            detail2="表計算ソフトのこと"
            detail3="excel本体⇒ブック⇒シート⇒セルの関係で成り立つ"
          />
          <Details
            summary="関数の概要"
            detail1="関数とは?"
            detail2="エクセル内にある内部プログラム"
            detail3="引数と戻り値を用いて演算等行う"
            detail4="簡単に言うとエクセルの計算に使う便利機能"
          />
        </ol>
        <h2>操作編(基本)_day1</h2>
        <ol>
          <li>
            <details>
              <summary>ブック操作</summary>
              ブックの作成、保存
            </details>
          </li>
          <li>
            <details>
              <summary>シート操作</summary>
              シートの作成、コピー
            </details>
          </li>
          <li>
            <details>
              <summary>セル選択、入力</summary>
              セル選択、数値、文字列の入力
            </details>
          </li>
        </ol>
        <h2>操作編(発展)_day2</h2>
        <ol>
          <li>
            <details>
              <summary>フィルター機能</summary>
              データの抽出機能
            </details>
          </li>
          <li>
            <details>
              <summary>並び替え機能</summary>
              データの並び替え、キーの設定、昇順降順
            </details>
          </li>
          <li>
            <details>
              <summary>ピボットテーブル</summary>
              グループ集計
            </details>
          </li>
          <li>
            <details>
              <summary>データの入力規則</summary>
              セルの入力を楽にする
            </details>
          </li>
        </ol>
        <h2>関数編_day2</h2>
        <ol>
          <li>
            <details>
              <summary>四則演算</summary>
              足し算、引き算、掛け算、割り算
            </details>
          </li>
          <li>
            <details>
              <summary>SUM関数</summary>
              データの合計
            </details>
          </li>
          <li>
            <details>
              <summary>ROUNDDOWN関数</summary>
              データを切り捨てて表示する
            </details>
          </li>
          <li>
            <details>
              <summary>IF関数</summary>
              条件分岐
            </details>
          </li>
          <li>
            <details>
              <summary>VLOOKUP関数</summary>
              検索と値の取得
            </details>
          </li>
          <li>
            <details>
              <summary>COUNTIF関数</summary>
              条件に該当する値をカウントする
            </details>
          </li>
        </ol>
        <h2>関数編(応用)_day3</h2>
        <ol>
          <li>
            <details>
              <summary>アルゴリズム理解</summary>
              関数アルゴリズムの理解と手法の選択
            </details>
          </li>
          <li>
            <details>
              <summary>コールバック関数</summary>
              関数のネスト、コールバックの理解
              <br />
              IFコールバック、その他
            </details>
          </li>
        </ol>
      </main>
    </>
  );
}
