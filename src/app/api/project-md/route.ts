import { getProjectMarkdown } from '@/lib/notion';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'No ID' }, { status: 400 });
  const content = await getProjectMarkdown(id);
  return NextResponse.json({ content });
}
