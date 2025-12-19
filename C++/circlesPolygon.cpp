#include <cmath>

double circle_diameter(unsigned int sides, unsigned int side_length)
{
  if(sides < 3){
    return 0.0;
  }
  double angle_rad = M_PI / static_cast<double>(sides); // 180deg/n

  return static_cast<double>(side_length) / std::tan(angle_rad);  // side_length / 180/n
}