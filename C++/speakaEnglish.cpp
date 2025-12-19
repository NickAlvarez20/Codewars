#include <string>
#include <algorithm>
#include <cctype>

bool sp_eng(const std::string &sentence)
{
    std::string lower = sentence;
    std::transform(lower.begin(), lower.end(), lower.begin(),
                   [](unsigned char c)
                   { return std::tolower(c); }); // use lambda for safety
    return lower.find("english") != std::string::npos;
}