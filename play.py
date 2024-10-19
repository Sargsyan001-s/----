import time
import random
def pause():
    """Создает паузу между выводами текста для лучшего восприятия."""
    time.sleep(2)

def intro(player_name):
    """Введение в сюжет игры."""
    print(f"Ты, {player_name}, открыла глаза и обнаружила, что стала принцессой из Отомэ-игры.")
    print("Ты должна избежать злодейки и выбраться из её плена!\n")
    pause()

def level_1(inventory, player_name):
    """Уровень 1: Найти ключи и открыть дверь."""
    print("\nУровень 1: Ты в темной неизвестной комнате, где должна найти ключи ,чтобы выйти.")
    print("Что ты хочешь сделать?")
    action = input("Введите 'найти ключи' или 'пойти спать': ").lower()

    if action == "найти ключи":
        print("Ты нашла ключи на столе!")
        inventory.append("ключи")
        print("Теперь можно открыть дверь.")
        action = input("Что ты хочешь сделать? ('открыть дверь' или 'пойти спать'): ").lower()
        if action == "открыть дверь":
            print(f"{player_name}, ты открыла дверь и прошла дальше.\n")
            pause()
            return True
        else:
            print("Ты решила пойти спать, но не можешь! Надо убираться отсюда.")
            return False
    else:
        print("Ты пошла спать и не смогла выбраться! Вы остались там навсегда!Вы проиграли!")
        return False

def level_2(inventory, player_name):
    """Уровень 2: Найти волшебный предмет."""
    print("\nУровень 2: Ты должна найти волшебный предмет, чтобы победить злодейку.")
    print("Ищи внимательно!")
    action = input("Что ты хочешь сделать? ('искать меч' или 'идти дальше'): ").lower()

    if action == "искать меч":
        print("Ты нашла волшебный меч!")
        inventory.append("волшебный меч")
        print(f"{player_name}, ты взяла меч!")
        return True
    else:
        print("Ты решила идти дальше, но без меча и тебя съел монстр будет тяжело.")
        return False

def level_3(inventory, player_name):
    """Уровень 3: Встретить злодейку."""
    print("\nУровень 3: Ты встретила злодейку!")
    level_cases = ('использовать меч' ,'убежать')
    if "волшебный меч" in inventory:
        action = input(f"Что ты хочешь сделать? ( { level_cases[0]} или { level_cases[1]} ): ").lower()

        if action == level_cases[0]:
            print("Ты победила злодейку с помощью волшебного меча!")
            return True
        else:
            print("Злодейка поймала тебя, и ты проиграла!")
            return False
    else:
        print("Ты не можешь сражаться без волшебного меча!")
        return False

def level_4(inventory, player_name):
    """Уровень 4: Битва с монстром."""
    print("\nУровень 4: После победы над злодейкой появился страшный монстр!")

    action = input("Что ты хочешь сделать? ('сразиться' или 'убежать'): ").lower()

    if action == "сразиться":
        if "волшебный меч" in inventory:
            print("Ты использовала меч и победила монстра!")
            return True
        else:
            print("У тебя нет оружия, чтобы сразиться с монстром!")
            return False
    else:
        print("Ты решила убежать, но монстр поймал тебя!")
        return False

def level_5(inventory, player_name):
    """Уровень 5: Найти ключи для выхода из замка."""
    print("\nУровень 5: Ты должна найти ключи, чтобы выбраться из замка.")

    available_items = {"ключи от замка", "старинная книга", "золотая монета"}
    found_items = set()

    while len(found_items) < len(available_items):
        action = input("Что ты хочешь сделать? ('искать' или 'остаться'): ").lower()

        if action == "искать":
            item = random.choice(list(available_items - found_items))
            print(f"Ты нашла {item}!")
            found_items.add(item)
            inventory.append(item)
        else:
            print("Ты осталась здесь и не нашла пути на свободу.")
            return False

    print("Ты собрала все предметы!")
    return True


def level_6(inventory, player_name):
    """Уровень 6: Открыть ворота замка и выйти в лес."""
    print("\nУровень 6: Ты открыла ворота замка с помощью ключей.")

    if "ключи от замка" in inventory:
        action = input("Что ты хочешь сделать? ('выйти в лес' или 'остаться в замке с монстрами'): ").lower()

        if action == "выйти в лес":
            print(f"{player_name}, ты выскочила из замка и оказалась в лесу!")
            return True
        else:
            print("Ты осталась в замке... и он закрылся за тобой! Вы проиграли")
            return False
    else:
        print("У тебя нет ключей, чтобы открыть ворота!")
        return False

def level_7(player_name):
    """Уровень 7: Найти тропинку домой."""
    print("\nУровень 7: Ты в лесу, теперь найди путь к дому.")

    action = input("Что ты хочешь сделать? ('искать тропинку к дому' или 'сидеть и ждать'): ").lower()

    if action == "искать тропинку к дому":
        print("Ты нашла тропинку, идущую к дому!")
        print(f"Поздравляю, {player_name}, ты успешно вернулась домой!")
        return True
    else:
        print("Ты решила сидеть и ждать, но никто тебя не нашел.Конец игры")
        return False

def show_inventory(inventory, player_name):
    """Отображает инвентарь игрока."""
    print(f"\nИнвентарь {player_name}:")
    if inventory:
        for item in inventory:
            print(item)
    else:
        print("Инвентарь пуст.")

def main():
    """Основная функция, управляющая игровым процессом."""
    player_name = input("Введите имя вашего персонажа: ")
    inventory = ["вода", "веер", "ручка"] # Начальный инвентарь

    intro(player_name)

    show_inventory(inventory, player_name)

    if level_1(inventory, player_name):
        if level_2(inventory, player_name):
            if level_3(inventory, player_name):
                if level_4(inventory, player_name):
                    if level_5(inventory, player_name):
                        if level_6(inventory, player_name):
                            if level_7(player_name):
                                print(f"Ты, {player_name}, выиграла! Игра завершена.")
                            else:
                                print("Игра окончена.")
                        else:
                            print("Игра окончена.")
                    else:
                        print("Игра окончена.")
                else:
                    print("Игра окончена.")
            else:
                print("Игра окончена.")
        else:
            print("Игра окончена.")
    else:
        print("Игра окончена.")

if __name__ == "__main__":
    main()
