int area_or_perimeter(int l, int w)
{
    if (l == w)
    {
        return l * w;
    }
    else
    {
        return l + l + w + w;
    }
}

int area_or_perimeter(int l, int w)
{
    return (l == w) ? l * w : 2 * (l + w);
}