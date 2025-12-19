#include <vector>

std::vector<int> humanYearsCatYearsDogYears(int humanYears)
{
    int catYears = (humanYears == 1) ? 15 : (humanYears == 2) ? 24
                                                              : 24 + 4 * (humanYears - 2);
    int dogYears = (humanYears == 1) ? 15 : (humanYears == 2) ? 24
                                                              : 24 + 5 * (humanYears - 2);
    return {humanYears, catYears, dogYears};
}