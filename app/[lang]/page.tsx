import React from 'react';

import Link from 'next/link';

import type { Locale } from '@/i18n-config';
import { getTranslate } from '@/i18n-getTranslate';

import { Wrapper, Title } from './styled';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getTranslate(lang);
  return (
    <Wrapper>
      <Title>{t['Main Page']}</Title>
      <Link href={`/${lang}/otherpage`}>{t['Other Page']}</Link>
    </Wrapper>
  );
}
