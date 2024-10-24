import time
import random

character = {
    "name": "",
    "inventory": []
}

def pause():
    """Создает паузу между выводами текста для лучшего восприятия."""
    time.sleep(2)

def intro(player_name):
    """Введение в сюжет игры."""
    print(f"Ты, {player_name}, открыла глаза и обнаружила, что стала принцессой из Отомэ-игры (=^ ◡ ^=)")
    print("Ты должна избежать злодейки и выбраться из её плена!\n")
    pause()

def pause():
    """Создает паузу между выводами текста для лучшего восприятия."""
    time.sleep(2)

def intro(player_name):
    """Введение в сюжет игры."""
    print(f"Ты, {player_name}, открыла глаза и обнаружила, что стала принцессой из Отомэ-игры (=^ ◡ ^=)")
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
    level_cases = ('использовать меч (つ▀¯▀)つ' ,'убежать', 'использовать меч и занять ее трон')
    if "волшебный меч" in inventory:
        action = input(f"Что ты хочешь сделать? ( { level_cases[0]} или { level_cases[1]} или { level_cases[2]} ): ").lower()

        if action == level_cases[0]:
            print("Ты победила злодейку с помощью волшебного меча!")
            return True
        elif action == level_cases[1]:
            print("Злодейка поймала тебя, и ты проиграла!")
            return False
        elif action == level_cases[2]:
            print("Ты решила вернуться в замок и занять место злодейки. Помни, что зло всегда побеждает!")
            return "evil_path" # Возвращаем специальный ключ для перехода на новый путь
    else:
        print("Ты не можешь сражаться без волшебного меча!")
        return False

def level_4(inventory, player_name):
    """Уровень 4: Битва с монстром."""
    print("\nУровень 4: После победы над злодейкой появился страшный монстр!")

    action = input("Что ты хочешь сделать? (´･ω･`)? ('сразиться' или 'убежать куда глаза глядят (×﹏×)'): ").lower()

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
        action = input("Что ты хочешь сделать?\n ('искать ' или 'сидеть и ждать'): ").lower()

        if action == "искать":
            item = random.choice(list(available_items - found_items))
            print(f"Ты нашла {item}!")
            found_items.add(item)
            inventory.append(item)
        else:
            print("Ты сидишь и ждешь,но неожиданно почувствовала странную силу пронизывающую тебя.Ты понимаешь,что заняла место злодейки и перешла на сторону зла!")
            return True

    print("Ты собрала все предметы!")
    return True

def level_6(inventory, player_name):
    """Уровень 6: Открыть ворота замка и выйти в лес."""
    print("\nУровень 6: Ты открыла ворота замка с помощью ключей найденных в сундуке.")
    if "ключи от замка" in inventory:
        action = input("Что ты хочешь сделать? ('выйти в лес' или 'вернутся в замок и занять место злодейки'): ").lower()

        if action == "выйти в лес":
            print(f"{player_name}, ты выскочила из замка и оказалась в густом лесу!")
            return True
        else:
            print("Ты заняла место злодейки! Пройдя дальше ты увидела сейф и открыв его ключем увидела личный дневник.")
            print("В дневнике ты обнаружила план злодейки по захвату мира. Она хотела использовать магию, чтобы контролировать всех людей.")
            pause()
            print("Что ты хочешь сделать? ('Попробовать захватить мир' или 'остановить ее план'): ")
            action = input().lower()

            if action == "попробовать захватить мир":
                print("Ты пытаешься использовать магию, но у тебя нет опыта и ты взорвала замок.")
                print("Ты осталась без ничего.")
                print("Ты проиграла!")
                return False
            elif action == "остановить ее план":
                print("Ты решила, что раз ты ее убила то план недействителен")
                return True
            else:
                print("Ты не знаешь, что делать и проигрываешь!")
                return False
    else:
        print("У тебя нет ключей, чтобы открыть ворота!")
        return False

def level_7(inventory, player_name):
    """Уровень 7: Найти тропинку домой."""
    print("\nУровень 7: Ты в лесу, теперь найди путь к дому.")

    action = input("Что ты хочешь сделать? ('искать тропинку к дому' или 'прочитать план найденный в сундуке): ").lower()

    if action == "искать тропинку к дому":
        print("Ты нашла тропинку, идущую к дому!")
        print(f"Поздравляю, {player_name}, ты успешно вернулась домой!")
        return True
    else:
        print("ты прочла план по захвату мира...и превратилась в злодейку ")
        return False
def evil_path(inventory, player_name):
    """Путь злодейки."""
    print("\nТы вернулась в замок и решила занять место злодейки.")
    print("Но сначала нужно найти корону...")

    action = input("Что ты хочешь сделать? ('искать корону' или 'пойти к трону'): ").lower()

    if action == "искать корону":
        print("Ты нашла корону в тайном хранилище замка!")
        inventory.append("корону злодейки")
        print("Теперь ты можешь стать новой злодейкой.")
        action = input("Что ты хочешь сделать? ('надеть корону' или 'убежать'): ").lower()
        if action == "надеть корону":
            print(f"{player_name}, ты надела корону и стала новой злодейкой!")
            return True
        else:
            print("Ты решила убежать, но все равно стала злодейкой...")
            return False
    else:
        print("Ты пошла к трону, но без короны никто не подчиняется! Ты проиграла!")
        return False

def evil_reign(player_name):
    """Владычество злодейки."""
    print(f"\nТы, {player_name}, стала новой злодейкой! Ты управляешь замком и всем, что в нем!")
    print("Ты решила, что ты будешь похищать красивых девушек и держать их в замке...")
    time.sleep(5)
    print("\nПрошло 10 лет...")
    print(f"Ты, {player_name}, похитила еще одну девушку...")
    print("Но ты внезапно вспомнила о своем прошлом...")
    print("Ты помнишь, как ты пыталась сбежать от этой злой жизни...")
    print("Твои воспоминания мучают тебя...")
    print("Ты понимаешь, что не можешь больше жить так...")
    print("Твоё сердце разрывается от чувства вины...")
    print("Ты умираешь...")
    print("Игра окончена.")

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
    character["name"] = {player_name } # Задаем имя персонажа

    # Начальный инвентарь
    initial_inventory = ["вода", "веер", "ручка"]
    character["inventory"] = initial_inventory

    # Выводим информацию о персонаже
    print(f"Имя персонажа: {character['name']}")
    print(f"Инвентарь: {', '.join(character['inventory'])}")

    intro(player_name)

    while True:
        if level_1(character['inventory'], player_name):
            if level_2(character['inventory'], player_name):
                result = level_3(character['inventory'], player_name)
                if result is True:
                    if level_4(character['inventory'], player_name):
                        if level_5(character['inventory'], player_name):
                            if level_6(character['inventory'], player_name):
                                if level_7 (player_name=player_name, inventory=character['inventory']):
                                    print(f"Ты, {player_name}, выиграла! Игра завершена.")
                                    break
                                else:
                                    print("Игра окончена.")
                            else:
                                print("Игра окончена.")
                        else:
                            print("Игра окончена.")
                    else:
                        print("Игра окончена.")
                elif result == "evil_path":
                    if evil_path(character['inventory'], player_name):
                        evil_reign(player_name)
                        break
                    else:
                        print("Игра окончена.")
                else:
                    print("Игра окончена.")
            else:
                print("Игра окончена.")
        else:
            print("Игра окончена.")

    show_inventory(character['inventory'], player_name)

if __name__ == "__main__":
    main()
