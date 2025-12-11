package kata

func GetGrade(a, b, c int) rune {
    score := (a + b + c) / 3
    var finalGrade rune

    switch {
    case score >= 90:
        finalGrade = 'A'
    case score >= 80:
        finalGrade = 'B'
    case score >= 70:
        finalGrade = 'C'
    case score >= 60:
        finalGrade = 'D'
    default:
        finalGrade = 'F'
    }

    return finalGrade
}