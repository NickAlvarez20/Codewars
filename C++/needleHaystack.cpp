#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

std::string findNeedle(const std::vector<std::string> &haystack)
{
    std::string position = "";
    for (size_t i = 0; i < haystack.size(); ++i)
    {
        if (haystack[i] == "needle")
        {
            return "found the needle at position " + std::to_string(i);
        }
    }
    return "needle no exists";
}

