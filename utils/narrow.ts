export function narrow(value: string, lists: string[]) {
  const analy: { index: number; text: string }[] = lists.flatMap((li) => {
    const match = li.match(value);
    return match ? { index: match.index!, text: match.input! } : [];
  });

  if (analy.length === 0) {
    return [value];
  } else {
    const sorted = analy.sort((a, b) => a.index - b.index);
    const suggests = sorted.map((sort) => sort.text);
    return suggests;
  }
}
