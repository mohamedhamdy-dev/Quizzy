import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  let apiUrl = "https://opentdb.com/api.php?";
  apiUrl += `amount=${searchParams.get("amount") || 10}`;

  if (searchParams.get("category"))
    apiUrl += `&category=${searchParams.get("category")}`;
  if (searchParams.get("difficulty"))
    apiUrl += `&difficulty=${searchParams.get("difficulty")}`;
  if (searchParams.get("type")) apiUrl += `&type=${searchParams.get("type")}`;

  const res = await fetch(apiUrl);
  const data = await res.json();

  return NextResponse.json(data);
}
