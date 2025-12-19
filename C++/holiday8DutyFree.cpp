#include <cmath>

int duty_free(int price, int discount, int holiday_cost)
{
    return std::floor(holiday_cost / (price * (discount / 100)));
}