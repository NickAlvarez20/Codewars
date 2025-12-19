#include <iostream>
#include <string>
#include <algorithm>
#include <sstream>
#include <limits>

std::string highAndLow(const std::string &numbers)
{
    if (numbers.empty())
    {
        return "0 0";
    }

    std::istringstream iss(numbers);
    int num;
    int min_val = std::numeric_limits<int>::max();
    int max_val = std::numeric_limits<int>::min();

    // Read all numbers and track min/max manually
    while (iss >> num)
    {
        if (num < min_val)
            min_val = num;
        if (num > max_val)
            max_val = num;
    }
    if (min_val == std::numeric_limits<int>::max())
    {
        return "0 0";
    }
    return std::to_string(max_val) + " " + std::to_string(min_val);
}