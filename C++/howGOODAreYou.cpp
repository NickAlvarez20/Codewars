#include <vector>
#include <numeric>

bool betterThanAverage(std::vector<int> classPoints, int yourPoints)
{
    int sum = std::accumulate(classPoints.begin(), classPoints.end(), 0);
    return (yourPoints > (sum / classPoints.size()));
}