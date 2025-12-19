#include <string>
#include <cmath>

double distance_between_two_points(const Point &a, const Point &b)
{
    double dx = b.x - a.x;
    double dy = b.y - a.y;
    return std::sqrt(std::pow(dx, 2) + std::pow(dy, 2));
}